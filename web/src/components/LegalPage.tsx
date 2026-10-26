import type { LegalDoc } from "@/content/legal";
import { PageHero } from "./ui";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero title={doc.title} height={220} />
      <section className="section">
        <div className="container container--narrow legal">
          <p>{doc.intro}</p>
          {doc.sections.map((s) => (
            <div key={s.h}>
              <h2>{s.h}</h2>
              {s.p?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {s.ul ? (
                <ul>
                  {s.ul.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
