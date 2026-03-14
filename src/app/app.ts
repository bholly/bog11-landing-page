import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly matrixColumns = [
    '10110011 01010101 11001010 01101001 10101110',
    'bog11 cloud ai automation agents retrieval signal',
    '01010110 11100011 00110101 01011010 11110000',
    'n8n flowise openclaw private stack orchestration',
    '11001101 00110011 10101010 01010101 10011001',
    'vector prompt context memory tools runtime nodes',
    '01101110 11010010 00101101 10110110 01011100',
    'subdomain compute signal chain workflow deploy',
  ];

  protected readonly trustMetrics = [
    { value: '24/7', label: 'maschinelle Geschäftigkeit, auch wenn Menschen schlafen' },
    { value: '3+', label: 'KI-Tools mit Ambitionen, Ego und produktivem Nutzen' },
    { value: '<60s', label: 'von einer vagen Idee zu einem Flow mit Sendungsbewusstsein' },
  ];

  protected readonly pillars = [
    {
      eyebrow: 'Automation Layer',
      title: 'Workflows, die nicht nur klicken, sondern so tun, als hätten sie einen Plan.',
      description:
        'Von Event-Routing bis Datenanreicherung orchestriert bog11.cloud Abläufe, damit Teams weniger Copy-Paste-Rituale aufführen und mehr wie die Zukunft aussehen.',
    },
    {
      eyebrow: 'Agent Builder',
      title: 'Visuelle KI-Systeme für alle, die lieber bauen als PowerPoints über KI malen.',
      description:
        'Prompt-Chains, Tool-Use und Retrieval-Patterns lassen sich hier testen, kombinieren und solange verbiegen, bis daraus ein echter Anwendungsfall wird.',
    },
    {
      eyebrow: 'Private AI Ops',
      title: 'Eigene KI-Services unter einer gemeinsamen Cloud-DNA, ganz ohne wilden Admin-Zirkus.',
      description:
        'Self-hosted Tools, kontrollierte Deployments und klare Subdomains sorgen dafür, dass sensible KI-Anwendungen nicht wie ein Hobbyprojekt vom letzten Sonntag wirken.',
    },
  ];

  protected readonly toolCards = [
    {
      name: 'n8n',
      tagline: 'Automation Engine',
      summary:
        'Für robuste KI- und API-Automationen mit klaren Triggern, Datenflüssen und genau der Sorte Struktur, die Chaos nur noch dekorativ macht.',
    },
    {
      name: 'Flowise',
      tagline: 'LLM Flow Studio',
      summary:
        'Für visuelles Prototyping von Chains, Agents und Retrieval-Pipelines, damit man über KI reden und gleichzeitig schon etwas Vorzeigbares haben kann.',
    },
    {
      name: 'OpenClaw',
      tagline: 'Open AI Workspace',
      summary:
        'Für experimentelle KI-Interfaces, wenn neue Modelle, Assistants und interne Ideen möglichst schnell in etwas halbwegs Eindrucksvolles verwandelt werden sollen.',
    },
  ];

  protected readonly useCases = [
    'Lead-Qualifizierung, damit Vertrieb nicht mehr jeden Kontakt wie einen Lottoschein behandeln muss',
    'Interne Wissenssysteme, die Antworten liefern statt nur weitere Ordner zu erzeugen',
    'Automatisierte Backoffice-Prozesse für alle, die Excel nicht als Persönlichkeit sehen',
    'Sichere Spielwiesen für neue Modelle, Produktideen und kontrollierten KI-Größenwahn',
  ];
}
