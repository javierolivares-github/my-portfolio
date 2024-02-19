/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-900": "#4C1D95",
        "primary-600": "#7C3AED",
        "primary-300": "#C4B5FD",
        "primary-100": "#EDE9FE",
        "primary-50": "#F5F3FF",
        "secondary-900": "#2A4E51",
        "secondary-600": "#1DB5BE",
        "secondary-300": "#75E3EA",
        "secondary-100": "#D5FAFC",
        "secondary-50": "#ECFEFF",
        "neutral-900": "#111827",
        "neutral-800": "#1F2937",
        "neutral-700": "#374151",
        "neutral-600": "#4B5563",
        "neutral-500": "#6B7280",
        "neutral-400": "#9CA3AF",
        "neutral-300": "#D1D5DB",
        "neutral-200": "#E5E7EB",
        "neutral-100": "#F3F4F6",
        "neutral-50": "#F9FAFB",
        "accent-01": "#C1E5C0",
        "accent-02": "#C0DAE5",
        "accent-03": "#FDD9D9",
        "accent-04": "#FFC3D8",
        "accent-05": "#A0DCFF",
        "accent-06": "#D9E8EF",
        "red-600": "#DC2626",
      }
    },
  },
  plugins: [],
}

