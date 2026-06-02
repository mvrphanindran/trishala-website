param(
  [Parameter(Mandatory = $true)]
  [string]$PptxPath,

  [Parameter(Mandatory = $false)]
  [string]$OutDir,

  [Parameter(Mandatory = $false)]
  [string]$OutTextPath
)

$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($OutDir)) {
  $OutDir = Join-Path (Get-Location) ".tmp\brochure_pptx"
}
if ([string]::IsNullOrWhiteSpace($OutTextPath)) {
  $OutTextPath = Join-Path (Get-Location) ".tmp\brochure_text.txt"
}

if (-not (Test-Path -LiteralPath $PptxPath)) {
  throw "PPTX not found: $PptxPath"
}

if (Test-Path -LiteralPath $OutDir) {
  Remove-Item -LiteralPath $OutDir -Recurse -Force
}
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

$zipPath = Join-Path $OutDir "_brochure.zip"
Copy-Item -LiteralPath $PptxPath -Destination $zipPath -Force
Expand-Archive -LiteralPath $zipPath -DestinationPath $OutDir -Force

$slidesDir = Join-Path $OutDir "ppt\slides"
$slideFiles = Get-ChildItem -LiteralPath $slidesDir -Filter "slide*.xml" | Sort-Object Name

$lines = New-Object System.Collections.Generic.List[string]
$lines.Add("SOURCE_PPTX: $PptxPath")
$lines.Add("EXTRACTED_AT: $(Get-Date -Format o)")
$lines.Add("")

foreach ($slide in $slideFiles) {
  $lines.Add(("=" * 80))
  $lines.Add("SLIDE: $($slide.Name)")
  $lines.Add(("=" * 80))

  $xmlText = Get-Content -LiteralPath $slide.FullName -Raw
  [xml]$xml = $xmlText
  $nodes = $xml.SelectNodes("//*[local-name()='t']")

  foreach ($n in $nodes) {
    $t = $n.InnerText
    if ($null -ne $t) {
      $trimmed = $t.Trim()
      if ($trimmed.Length -gt 0) {
        $lines.Add($trimmed)
      }
    }
  }

  $lines.Add("")
}

Set-Content -LiteralPath $OutTextPath -Value $lines -Encoding UTF8
Write-Output $OutTextPath

