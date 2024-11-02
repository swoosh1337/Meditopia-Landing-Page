export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-yellow-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h2>
            <p>
              The TM App is committed to protecting your privacy. This Privacy Policy explains our practices regarding data collection and usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Collection</h2>
            <p>
              Our app collects minimal data to provide you with the best meditation experience:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>
                <strong>Heart Rate Data:</strong> We only access heart rate data with your explicit permission. This data is used solely for displaying your heart rate graph during meditation sessions and is not stored on our servers.
              </li>
              <li>
                <strong>Local Storage:</strong> Your meditation settings and progress are stored locally on your device and are not transmitted to any external servers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Usage</h2>
            <p>
              The heart rate data we access is:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Only used for real-time display during meditation sessions</li>
              <li>Never stored on our servers</li>
              <li>Never shared with third parties</li>
              <li>Only accessed when you grant permission through your device&apos;s health settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Storage</h2>
            <p>
              All app data, including your:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Meditation settings</li>
              <li>Session history</li>
              <li>Progress tracking</li>
              <li>Streaks</li>
            </ul>
            <p className="mt-2">
              is stored locally on your device and is not transmitted to or stored on any external servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
            <p>
              You have complete control over your data:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>You can revoke heart rate access at any time through your device&apos;s settings</li>
              <li>You can clear all local app data by deleting and reinstalling the app</li>
              <li>No data recovery is possible after deletion as we don&apos;t store any data on servers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:tazigrigolia@gmail.com" className="text-yellow-600 hover:text-yellow-700">
                tazigrigolia@gmail.com
              </a>
            </p>
          </section>

          <footer className="pt-8 mt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: November  2024
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
} 