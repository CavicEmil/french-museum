import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow"> 
                <Background />
                <Outlet />
            </main>
            <Footer />
        </div>
     )
}