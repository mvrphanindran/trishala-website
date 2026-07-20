import type { Employee } from "@/data/employees";
import {
  companyName,
  companyWebsiteUrl,
  corporateOfficeAddress,
  manufacturingUnitAddress,
} from "@/data/digital-card-content";

function escapeVCardValue(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function joinAddress(lines: readonly string[]) {
  return escapeVCardValue(lines.join(", "));
}

export function buildEmployeeVCard(employee: Employee) {
  const officeAddress = joinAddress(corporateOfficeAddress);
  const manufacturingAddress = joinAddress(manufacturingUnitAddress);
  const noteLines = [
    companyName,
    `Corporate Office: ${corporateOfficeAddress.join(" ")}`,
    `Manufacturing Unit: ${manufacturingUnitAddress.join(" ")}`,
  ];

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCardValue(employee.name)};;;;`,
    `FN:${escapeVCardValue(employee.name)}`,
    `ORG:${escapeVCardValue(companyName)}`,
    `TITLE:${escapeVCardValue(employee.designation)}`,
    `TEL;TYPE=CELL:${escapeVCardValue(employee.phone)}`,
    `EMAIL;TYPE=INTERNET:${escapeVCardValue(employee.email)}`,
    `URL:${escapeVCardValue(companyWebsiteUrl)}`,
    `ADR;TYPE=WORK:;;${officeAddress}`,
    `NOTE:${escapeVCardValue(noteLines.join(" | "))}`,
    `X-MANUFACTURING-UNIT:${manufacturingAddress}`,
    "END:VCARD",
    "",
  ].join("\r\n");
}
