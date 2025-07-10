        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {menuItems[activeCategory]?.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gold/30 rounded-xl p-4 sm:p-6 hover:border-gold transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 transform hover:-translate-y-2 active:scale-95"
            >
              <div className="flex justify-between items-start mb-3 sm:mb-4 gap-3">
                <h3 className="text-lg sm:text-xl font-body font-semibold text-white group-hover:text-gold transition-colors duration-300 leading-tight flex-1 min-w-0">
                  {item.name}
                </h3>
                <span className="text-sm sm:text-base font-body font-bold text-gold bg-gold/10 px-2 py-1 rounded-full flex-shrink-0 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-light-gray font-body group-hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}