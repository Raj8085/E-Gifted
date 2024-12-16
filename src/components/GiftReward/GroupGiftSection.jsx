
const GroupGiftSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 max-w-6xl mx-auto px-4">
      {/* Image / Illustration side */}
      <div className="flex-1 flex justify-center items-center mb-8 md:mb-0">
        <img
          src="/eGiftedImages/group-gifts.png"
          alt="Gift illustration"
          className="max-w-full h-auto"
        />
      </div>
      
      {/* Text / Content side */}
      <div className="flex-1 md:ml-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Group Gifts Made Simple</h1>
        <p className="text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">
          Set-up a Group Gift, invite others to chip in and choose from hundreds of Gift Cards
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-colors">
          Start a Group Gift
        </button>
      </div>
    </section>
  );
};

export default GroupGiftSection;
