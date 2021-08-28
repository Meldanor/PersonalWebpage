<template>
  <div>
    <h2 class="text-3xl font-bold ml-4 md:ml-0 text-left md:text-center mt-8 md:mt-0">
      Skills
    </h2>
    <div class="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 justify-items-stretch w-full px-2 sm:px-0">
      <skill name="Java" icon="/logos/java.png">
        <template #skill-list>
          Java 5-16, SpringBoot, Quarkus, Gradle, Maven, JUnit, Hibernate, JavaFX
        </template>
        <template #description>
          Mehr als zehn Jahre meine Hauptsprache für verschiedenste Anwendungsbereiche. Ich kann damit wartbare und
          performante Projekte selbstständig entwickeln.
        </template>
      </skill>
      <skill name="Elixir" icon="/logos/elixir.png">
        <template #skill-list>
          Phoenix, ExUnit, Ecto, Absinthe
        </template>
        <template #description>
          Ideal für Web Entwicklung, da das Tooling sehr gut ist und viele Probleme elegant gelöst werden können.
          Seit zwei Jahren hauptberuflich in kleinen bis mittel großen Projekten.
        </template>
      </skill>
      <skill name="Frontend" icon="/logos/vue-js.png">
        <template #skill-list>
          Vue 2/3, CSS3, Javascript, Typescript, HTML5, SPA, Bootstrap, Bulma, WebPack 4, Tailwind CSS
        </template>
        <template #description>
          Einfache Websiten in reinem HTML5 und mittel komplexe SPAs kann ich mit Vue umsetzen.
        </template>
      </skill>
      <skill name="Datenbanken" icon="/logos/postgresql.png">
        <template #skill-list>
          PostgreSQL, MySQL/MariaDb, SQLite, ClickHouse, FullTextSearch
        </template>
        <template #description>
          Fast jedes meiner Projete benötigte eine Datenbank. Ich kann aus komplexen Anforderungen
          die Datenmodelle erstellen und eine Empfehlung geeigneter Datenbanken geben.
        </template>
      </skill>
      <skill name="Software Engineer" icon="/logos/openapi.png">
        <template #skill-list>
          OpenAPI, Requirement Engineering, SCRUM / Kanban, Team- und Projektleitung
        </template>
        <template #description>
          Konzeptionelle Skills, die ich in allen Projekten verwende.
          Entwicklung von Konzepten mit Vor- und Nachteilanalyse anhand von Anforderung,
          Empfehlung von Tech Stacks, Schätzung von Aufwänden.
        </template>
      </skill>
      <skill name="Monitoring" icon="/logos/prometheus.png">
        <template #skill-list>
          Prometheus, Grafana, ELK-Stack, Logback, slf4j
        </template>
        <template #description>
          Überwachung von Applikationen anhand verschiedener Metriken sowie Darstellung der Daten in Grafana und
          Einstellung von Alerts. Vereinfachtes Debugging und Fehlersuche durch intensives und intelligentes Logging.
        </template>
      </skill>
      <skill name="Serversysteme" icon="/logos/docker.png">
        <template #skill-list>
          Linux (Ubuntu/Debian), UNRaid, Docker+Docker-Compose, Dokku, Cloud
        </template>
        <template #description>
          Aufsetzen von Systemen, Installation und Konfiguration von Serverprogrammen und Verwendung moderner
          Technologien. Ich würde aber keinen missionskritischen Server hauptverantwortlich betreuen.
        </template>
      </skill>
      <skill name="DevOps" icon="/logos/github-actions.svg">
        <template #skill-list>
          Docker, GitLab CI, Docker-Compose, Bamboo, Sonar Lint, Static-Code Analyse
        </template>
        <template #description>
          <p>
            <i>You build it, you run it.</i>
          </p>
          <p>
            Jeder gute Entwickler sollte in der Lage sein, seinen Änderungen jederzeit zuverlässig
            selber deployen zu können.
          </p>
        </template>
      </skill>
      <skill name="Clean Code" icon="/logos/git.png">
        <template #skill-list>
          Git, GitLab CI, Atlassian Toolchain, Sonar Lint, Static-Code Analyse
        </template>
        <template #description>
          Erstellen von CI/CD-Jobs für verschiedene Projekten, um Code Qualität zu erhöhen. Spezialisierung in Docker.
        </template>
      </skill>
      <skill name="Betriebssysteme" icon="/logos/tux.png">
        <template #skill-list>
          Linux (Ubuntu/Debian/PopOS!), Windows, MacOS, iOS, Raspian
        </template>
        <template #description>
          Ich habe unter Windows, OS X und Linux entwickelt, verwende Linux für Server und benutzt private iOS Geräte.
          Derzeit entwickel ich am liebsten wegen nativer Docker Unterstützung unter Linux.
        </template>
      </skill>
      <skill name="Interessen" icon="/logos/rust.png">
        <template #skill-list>
          Rust, COBOL, BigData, Video/Audio-Codecs, Informationsvisualisierung, Robotik, Kubernetes, ARM
        </template>
        <template #description>
          Thematiken, die ich interessant finde, aber nur Grundwissen habe. Hier würde ich meine Erfahrung aus den
          anderen Skills einsetzen, um mich schnell einzuarbeiten.
        </template>
      </skill>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Skill from '~/components/Skill.vue'

export default Vue.extend({
  components: {
    Skill
  }
})
</script>
