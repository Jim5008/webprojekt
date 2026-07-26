import Navbar from './Navbar';

function App() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Bereich */}
      <div className="flex flex-col justify-center items-center h-96 px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-blue-900">
          Willkommen!
        </h1>
        <p className="mt-4 text-sm md:text-lg lg:text-xl text-gray-500">
          Ich lerne Web-Entwicklung und baue moderne Websites.
        </p>
      </div>

      {/* Karten Bereich */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-16">
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">HTML & CSS</h2>
          <p className="mt-2 text-gray-500">Das Fundament jeder Website.</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">JavaScript</h2>
          <p className="mt-2 text-gray-500">Interaktivität und Logik.</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">React</h2>
          <p className="mt-2 text-gray-500">Moderne Komponenten-Architektur.</p>
        </div>
      </div>

    </div>
  );
}

export default App;