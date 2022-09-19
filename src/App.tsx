import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/Home";
import RQSuperHeroes from "./components/RQSuperHeroes/RQSuperHeroes";
import SuperHeroesPage from "./components/SuperHeroes.page/SuperHeroes.page";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import QueryHero from './components/QueryHero/QueryHero';
import ParallelQueries from "./components/ParallelQueries/ParallelQueries";
import DynamicParallel from "./components/DynamicParallel/DynamicParallel";
import DependentQuery from "./components/DependentQuery/DependentQuery";
import Pagination from "./components/Pagination/Pagination";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
    <div className="App">
      <nav style={{display:'flex', justifyContent:'space-around', width: '1000px'}}>
        <Link to="/">Home</Link>
        <Link to="super-heroes">SuperHeroesPage</Link>
        <Link to="rq-super-heroes">RQSuperHeroes</Link>
        <Link to="rq-parallel">ParallelQueries</Link>
        <Link to="rq-dynamic">DynamicParallel</Link>
        <Link to="rq-dependent">DependentQuery</Link>
        <Link to="rq-pagination">Pagination</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="super-heroes" element={<SuperHeroesPage />} />
        <Route path="rq-super-heroes" element={<RQSuperHeroes />} />
        <Route path="rq-super-heroes/:id" element={<QueryHero />} />
        <Route path="rq-parallel" element={<ParallelQueries />} />
        <Route path="rq-dynamic" element={<DynamicParallel heroesIds={[1,2]} />} />
        <Route path="rq-dependent" element={<DependentQuery usersString={'users'}/>} />
        <Route path="rq-pagination" element={<Pagination/>} />
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;
