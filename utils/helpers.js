module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },

    placeholder_image: (category) => {
      if (category === 'Camping') {
        return '/camping-icon.png'
      } else if (category === 'Events') {
        return '/event-supplies.png'
      } else if (category === 'Exercise') {
        return '/exercise-icon.png'
      } else if (category === 'Children') {
        return '/children-equipment.png'
      } else if (category === 'Hardware') {
        return '/tools-icon.png'
      } else if (category === 'Medical') {
        return '/medical-equipment.png'
      } else if (category === 'Outdoor') {
        return '/camping-icon.png'
      } else if (category === 'Discover passes') {
        return '/event-game-passes.png'
      } else if (category === 'Games') {
        return '/event-game-passes.png'
      }
    }
};