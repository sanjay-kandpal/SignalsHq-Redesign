// components/StripedBackground.tsx
const StripedBackground = () => {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="grid grid-cols-3 h-full w-full">
          {/* Column 1 */}
          <div className="grid grid-rows-6">
            <div className="bg-emerald-200"></div>
            <div className="bg-teal-600"></div>
            <div className="bg-coral-400"></div>
            <div className="bg-blue-600"></div>
            <div className="bg-emerald-200"></div>
            <div className="bg-coral-400"></div>
          </div>
          
          {/* Column 2 */}
          <div className="grid grid-rows-6">
            <div className="bg-blue-600"></div>
            <div className="bg-teal-400"></div>
            <div className="bg-coral-400"></div>
            <div className="bg-lavender-300"></div>
            <div className="bg-teal-600"></div>
            <div className="bg-teal-400"></div>
          </div>
          
          {/* Column 3 */}
          <div className="grid grid-rows-6">
            <div className="bg-purple-900"></div>
            <div className="bg-teal-600"></div>
            <div className="bg-yellow-200"></div>
            <div className="bg-coral-400"></div>
            <div className="bg-purple-900"></div>
            <div className="bg-teal-600"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default StripedBackground;