import Navbar from '../components/layout/Navbar';

function Learn() {
    return (
        <div className="flex flex-col min-h-[100dvh] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
            <Navbar />
            <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mt-6 md:mt-10">
                <h1 className="font-sans text-3xl font-bold">Learn</h1>
                <p className="mt-4 text-text-muted">Emergency and disaster learning library coming soon.</p>
            </main>
        </div>
    );
}

export default Learn;