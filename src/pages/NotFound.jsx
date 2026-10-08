import { Link } from 'react-router';
import { ShieldAlert } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

export default function NotFound() {
    return (
        <main className="max-w-2xl mx-auto px-4 py-16 md:py-24 text-center">
            <Card className="p-8 md:p-12 space-y-8 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-surface-2 flex items-center justify-center text-text-muted">
                    <ShieldAlert className="w-10 h-10" aria-hidden="true" />
                </div>
                
                <div className="space-y-3">
                    <h1 className="text-3xl font-extrabold tracking-tight">Page Not Found</h1>
                    <p className="text-lg text-text-muted">
                        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                    <Button as={Link} to="/" variant="solid" color="learn" className="flex-1">
                        Go Home
                    </Button>
                    <Button as={Link} to="/learn" variant="outline" className="flex-1">
                        Go to Learn
                    </Button>
                </div>
            </Card>

            <div className="mt-8">
                <Link 
                    to="/emergency" 
                    className="inline-flex items-center gap-2 text-emergency font-bold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring focus-visible:rounded"
                >
                    <ShieldAlert className="w-5 h-5" aria-hidden="true" />
                    <span>Go to Emergency Actions</span>
                </Link>
            </div>
        </main>
    );
}
