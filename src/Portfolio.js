import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-16">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Shashwat Das</h1>
          <p className="text-lg text-gray-600">Software Engineer | Full-Stack Developer</p>
          <div className="mt-4 space-x-4 text-sm">
            <a href="mailto:shashwatdas15@gmail.com" className="text-blue-600 hover:underline">shashwatdas15@gmail.com</a>
            <span>|</span>
            <a href="https://linkedin.com/in/shashwat-das-aa5360191" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
            <span>|</span>
            <span>+91 9348545949</span>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div><strong>Languages:</strong> Python, JavaScript, C++, C#, Java</div>
            <div><strong>Frameworks:</strong> Node.js, React, ASP.NET, Flask, Django</div>
            <div><strong>Databases:</strong> PostgreSQL, MongoDB, Cosmos DB, MySQL</div>
            <div><strong>DevOps:</strong> Docker, CI/CD, Azure, AWS, Service Bus</div>
            <div><strong>Search/Infra:</strong> Elasticsearch, Hangfire, Grafana</div>
            <div><strong>Other:</strong> Git, React Native, Apollo, Bootstrap</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl">Software Engineer @ ConverzAI</h3>
              <p className="text-sm text-gray-500">May 2023 – Present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                <li>Built end-to-end infra for ATS sourcing, resume parsing, job matching, and auto-screening.</li>
                <li>Reduced manual Ops work by 90% via dynamic questionnaires and validation checks.</li>
                <li>Scaled infra for 1K+ candidate sessions and 400 jobs/min ingestion with high availability.</li>
                <li>Refactored monolith into scalable microservices architecture using Docker and Azure.</li>
                <li>Enhanced Elasticsearch indexing for sourcing relevance, reducing DNC errors by 50%.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Software Developer @ Newzera</h3>
              <p className="text-sm text-gray-500">July 2022 – Apr 2023</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
                <li>Built scalable content crawlers and clustering services (700+ articles/hour throughput).</li>
                <li>Developed video and social content extractors (Instagram, YouTube).</li>
                <li>Led development of user-focused mobile flows (newsfeed, discovery, sharing).</li>
                <li>Enhanced CMS workflows and created log-rotation tools for MongoDB cleanup.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li><strong>Intelligent Resume Matcher:</strong> ATS integration with semantic search, dynamic forms, and job suggestions.</li>
            <li><strong>Microservice Migration:</strong> Converted monolith to Dockerized services, improving deployment agility.</li>
            <li><strong>Content Aggregation Engine:</strong> High-throughput crawlers and clustering for real-time content processing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <p className="text-sm text-gray-700">
            <strong>IIT Dhanbad</strong> — B.Tech in Mineral Engineering, CGPA: 8.93 (Rank #3 in Dept) | OPJEMS & Samsung Scholar
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>Global HackerRank Rank: Top 1650 (600+ coding problems solved)</li>
            <li>Recognized as top performer during automation and scaling projects at ConverzAI</li>
          </ul>
        </section>

        <footer className="pt-8 text-center text-sm text-gray-500">
          Let's build something impactful — Reach out: <a className="text-blue-600 hover:underline" href="mailto:shashwatdas15@gmail.com">shashwatdas15@gmail.com</a>
        </footer>
      </div>
    </div>
  );
}
