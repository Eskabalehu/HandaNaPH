export default function SkipLink() {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-3 focus:rounded-xl focus:font-semibold focus:bg-learn-solid focus:text-on-solid focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
        >
            Skip to main content
        </a>
    );
}
