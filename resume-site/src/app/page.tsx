import VisitorCounter from './components/VisitorCounter';

export default function Home() {
  return (
    <main className="max-w-[1000px] mx-auto px-4 py-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="mb-1">WILLIAM SUN</h1>

        {/* Contact Info Line */}
        <div className="text-base mb-1 flex items-center justify-center gap-x-2">
          <a href="mailto:williamjsun@gmail.com" className="hover:text-gray-600">williamjsun@gmail.com</a>
          <span>•</span>
          <span>(646) 932-0089</span>
        </div>

        {/* Location and Social Line */}
        <div className="flex items-center justify-center gap-x-3 text-sm">
          <span className="text-gray-600">New York, NY</span>
          <VisitorCounter />
          <div className="flex items-center gap-x-2">
            <a href="https://linkedin.com/in/willthesun" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5 inline-block" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://github.com/WillTheSun" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <svg className="w-5 h-5 inline-block" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mt-6 mb-4">
        <div className="border-t border-black my-3" />
        <h2 className="font-bold uppercase text-lg tracking-wide mb-1">Summary - Senior Software Engineer & AI Builder</h2>
        <div className="text-[15px]">
          AI-focused Software Engineer (8 yoe) who architected revenue-critical ad platforms powering $10B+ in annual spend, and shipped production LLM features end-to-end. Eager to go deeper on RAG pipelines, eval frameworks, and open-weight fine-tuning.
        </div>
      </section>

      {/* Recent AI Projects */}
      <section className="mb-4">
        <h2 className="font-bold uppercase text-lg tracking-wide mb-1">Recent (AI) Projects</h2>
        <ul className="list-disc list-inside text-[15px] ml-2">
          <li>
            Therapy Bot (2025): LLM triage bot that classifies user messages and routes them to the best-fit modality (CBT, RO-DBT, somatic-mindfulness, growth-mindset coaching), swapping persona-specific system prompts on the fly
          </li>
          <li>
            AWS Cloud Resume (2025) - This site, deployed on AWS (Lambda, API Gateway, DynamoDB, CloudFront, IaC/Terraform)
          </li>
          <li>
            <a href="https://trysniff.com" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">TrySniff.com</a>, 2024 - LLM-driven dog food safety app that checks whether your leftovers are safe to share
          </li>
          <li>
            <a href="https://90apps.info" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">90apps.info</a>, 2024 - "90 AI apps in 90 days" challenge, focusing on rapid prototyping and real-world feedback.
          </li>
        </ul>
      </section>

      {/* Professional Experience */}
      <section className="mb-4">
        <div className="border-t border-black my-3" />
        <h2 className="font-bold uppercase text-lg tracking-wide mb-1">Professional Experience</h2>
        {/* Google */}
        <div className="flex justify-between items-baseline">
          <div>
            <span className="font-semibold">Google</span>
            <div className="italic text-[15px]">Senior Software Engineer</div>
            <a href="#" className="underline text-blue-700 text-[15px]">Reach Planner</a>
          </div>
          <div className="text-right text-[15px]">
            Los Angeles, CA<br />2019 – 2024
          </div>
        </div>
        <ul className="list-disc list-inside text-[15px] ml-2 mb-2">
          <li>Led a year-long, $10B+ integration of the Google Reach Planner into Display & Video 360 as technical lead, collaborating with 10+ senior cross functional stakeholders to set OKRs and coordinate resources.</li>
          <li>Drove E2E launch, including five bug bashes and stages, delivering $3.9B/quarter in planned ad revenue.</li>
          <li>Prototyped internal LLM tool to summarize large-scale forecasting data and automate report generation for stakeholders, integrating both structured and unstructured data.</li>
        </ul>
        <a href="#" className="underline text-blue-700 text-[15px]">Reach Report</a>
        <ul className="list-disc list-inside text-[15px] ml-2 mb-2">
          <li>Redesigned account selection system to support 10m+ accounts/campaigns, 20+ filters, in-memory and server-side processing—reducing timeouts and latency.</li>
          <li>Partnered with a Zurich team to merge metrics and insights, leveraging data to inform product roadmaps.</li>
          <li>Architected and deployed Java microservices for multi-currency ad billing calculations, caching exchange rates to optimize performance.</li>
        </ul>
        {/* Acorns */}
        <div className="flex justify-between items-baseline">
          <div>
            <span className="font-semibold">Acorns</span>
            <div className="italic text-[15px]">Fullstack Software Engineer</div>
          </div>
          <div className="text-right text-[15px]">
            Irvine, CA<br />2017 – 2019
          </div>
        </div>
        <ul className="list-disc list-inside text-[15px] ml-2 mb-2">
          <li>Launched check deposit and money transfer features to 150k beta users, working with 6 teams to align roadmap.</li>
          <li>Rebuilt 15+ page React signup flow (<a href="https://signup.acorns.com" className="underline text-blue-700">signup.acorns.com</a>) & improved test coverage 96%.</li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-4">
        <div className="border-t border-black my-3" />
        <h2 className="font-bold uppercase text-lg tracking-wide mb-1">Education</h2>
        <div className="flex justify-between items-baseline">
          <div>
            <span className="font-semibold">Yale University</span>
            <div className="italic text-[15px]">B.S. in Computer Science</div>
          </div>
          <div className="text-right text-[15px]">New Haven, CT<br />2013 – 2017</div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-2">
        <div className="border-t border-black my-3" />
        <h2 className="font-bold uppercase text-lg tracking-wide mb-1">Skills</h2>
        <ul className="list-disc list-inside text-[15px] ml-2">
          <li>LLM / GenAI Tools: LangChain, OpenAI, LangGraph, RAG pipelines</li>
          <li>Languages: Python, Spark, SQL, Java, JavaScript/TypeScript</li>
          <li>Frameworks: React, Node.js, Next.js, Angular</li>
          <li>Cloud & Infra: GCP, AWS, Terraform, IaC, CI/CD, Serverless, CloudFront/CDN, Docker, Vercel, Supabase, PostgreSQL, Redis,</li>
          <li>Other: Cursor/Claude expert, prompt engineering, few-shot prompting, LLM routing</li>
        </ul>
      </section>
    </main>
  );
}
