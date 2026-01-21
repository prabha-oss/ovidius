



export function Integrations() {
    return (
        <section className="min-h-screen flex flex-col justify-center py-16 px-6 bg-cream" id="integrations">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">We work with your tools. Not against them.</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We integrate AI into the systems your team already uses. No new logins. No migration headaches.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl border-2 border-black shadow-brutal-sm">
                        <h3 className="font-bold font-space mb-4 border-b-2 border-black/10 pb-2">CRMs & Sales</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Salesforce</li>
                            <li>HubSpot</li>
                            <li>Pipedrive</li>
                            <li>Close</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-black shadow-brutal-sm">
                        <h3 className="font-bold font-space mb-4 border-b-2 border-black/10 pb-2">Communication</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Slack</li>
                            <li>Microsoft Teams</li>
                            <li>Gmail</li>
                            <li>Outlook</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-black shadow-brutal-sm">
                        <h3 className="font-bold font-space mb-4 border-b-2 border-black/10 pb-2">Productivity</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Notion</li>
                            <li>Google Workspace</li>
                            <li>Microsoft 365</li>
                            <li>Asana</li>
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl border-2 border-black shadow-brutal-sm">
                        <h3 className="font-bold font-space mb-4 border-b-2 border-black/10 pb-2">Data & Analytics</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>Snowflake</li>
                            <li>BigQuery</li>
                            <li>Tableau</li>
                            <li>Looker</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-cream-dark p-8 rounded-2xl border-2 border-black text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold font-space mb-4">Custom Integrations</h3>
                    <p className="text-gray-600">
                        Have a proprietary system or unusual tech stack? We've built custom integrations for ERPs, legacy databases,
                        and industry-specific software. If it stores data, we can probably connect it.
                    </p>
                </div>
            </div>
        </section>
    );
}
