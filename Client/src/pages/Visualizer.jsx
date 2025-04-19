import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Visualizer() {
  return (
    <div className="min-h-screen bg-gray-900 dark:bg-gray-900 text-white">
      <Navbar />
      <main className="py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-400">Visualizer</h1>
          <p className="text-lg text-gray-300 mt-4">
            Interactive algorithm visualizations coming soon!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Visualizer;