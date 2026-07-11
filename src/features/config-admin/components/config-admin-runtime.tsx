import { buildConfigOverview } from "../services/config-admin-view-model";
import { buildConfigExport } from "../services/config-exporter";
import { loadDefaultConfigDraft } from "../services/config-loader";
import { runConfigPreview } from "../services/config-preview-runner";
import { ConfigDemoBanner } from "./config-demo-banner";
import { ConfigExportPanel } from "./config-export-panel";
import { ConfigImportPanel } from "./config-import-panel";
import { ConfigOverviewCards } from "./config-overview-cards";
import { ConfigPreviewPanel } from "./config-preview-panel";
import { ConfigResetPanel } from "./config-reset-panel";
import { ConfigValidationPanel } from "./config-validation-panel";
import { CtaConfigEditor } from "./cta-config-editor";
import { DisclaimerCopyEditor } from "./disclaimer-copy-editor";
import { OptionConfigEditor } from "./option-config-editor";
import { PersonaPreviewSelector } from "./persona-preview-selector";
import { ProductMappingEditor } from "./product-mapping-editor";
import { QuestionConfigEditor } from "./question-config-editor";
import { QuestionConfigList } from "./question-config-list";
import { RecommendationRuleEditor } from "./recommendation-rule-editor";
import { RecommendationRuleList } from "./recommendation-rule-list";
import { ScoreBandEditor } from "./score-band-editor";
import { ScoringWeightsEditor } from "./scoring-weights-editor";

export type ConfigSection =
  | "overview"
  | "questions"
  | "scoring"
  | "recommendations"
  | "products"
  | "ctas"
  | "preview"
  | "export"
  | "demo";

export function ConfigAdminRuntime({ section }: { section: ConfigSection }) {
  const draft = loadDefaultConfigDraft();
  const overview = buildConfigOverview(draft);
  const firstQuestion = draft.questions[0]!;
  return (
    <main className="ds-page ds-stack">
      <ConfigDemoBanner
        title={
          section === "demo"
            ? "Configuration Demo - Not Production Settings"
            : "Configuration demo - changes are for preview only and are not published to live NEM systems."
        }
      />
      {section === "overview" || section === "demo" ? (
        <>
          <ConfigOverviewCards overview={overview} />
          <ConfigValidationPanel validation={draft.validation} />
          <ConfigResetPanel />
        </>
      ) : null}
      {section === "questions" ? (
        <>
          <QuestionConfigList questions={draft.questions} />
          <QuestionConfigEditor question={firstQuestion} />
          <OptionConfigEditor question={firstQuestion} />
        </>
      ) : null}
      {section === "scoring" ? (
        <>
          <ScoringWeightsEditor draft={draft} />
          <ScoreBandEditor draft={draft} />
        </>
      ) : null}
      {section === "recommendations" ? (
        <>
          <RecommendationRuleList draft={draft} />
          <RecommendationRuleEditor draft={draft} />
        </>
      ) : null}
      {section === "products" ? <ProductMappingEditor draft={draft} /> : null}
      {section === "ctas" ? (
        <>
          <CtaConfigEditor draft={draft} />
          <DisclaimerCopyEditor draft={draft} />
        </>
      ) : null}
      {section === "preview" ? (
        <>
          <PersonaPreviewSelector />
          <ConfigPreviewPanel previews={runConfigPreview(draft)} />
          <ConfigValidationPanel validation={draft.validation} />
        </>
      ) : null}
      {section === "export" ? (
        <>
          <ConfigExportPanel result={buildConfigExport(draft)} />
          <ConfigImportPanel />
          <ConfigValidationPanel validation={draft.validation} />
        </>
      ) : null}
    </main>
  );
}
