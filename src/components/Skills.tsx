import type { IconType } from "react-icons";
import {
  SiPython,
  SiFastapi,
  SiFlask,
  SiDocker,
  SiPostgresql,
  SiGooglecloud,
  SiGit,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiShadcnui,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiOllama,
  SiLangchain,
} from "react-icons/si";
import Section from "@/components/Section";
import { skills } from "@/lib/data";

const skillIcons: Record<string, IconType> = {
  "Python (4+ yrs)": SiPython,
  FastAPI: SiFastapi,
  Flask: SiFlask,
  Docker: SiDocker,
  PostgreSQL: SiPostgresql,
  GCP: SiGooglecloud,
  Git: SiGit,
  React: SiReact,
  TypeScript: SiTypescript,
  "HTML/CSS": SiHtml5,
  "shadcn/ui": SiShadcnui,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  "Scikit-Learn": SiScikitlearn,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  HuggingFace: SiHuggingface,
  Ollama: SiOllama,
  LangChain: SiLangchain,
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="rounded-lg border border-border bg-card p-5">
            <p className="font-semibold">{group.category}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const Icon = skillIcons[skill];
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
