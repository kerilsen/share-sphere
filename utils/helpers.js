module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },

    placeholder_image: (category) => {
      if (category === 'Camping') {
        return '<img src="../images/landing_page/icons/camping-icon.png">'
      } else if (category === 'Events') {
        return '<img src="../images/landing_page/icons/event-supplies.png">'
      } else if (category === 'Exercise') {
        return '<img src="../images/landing_page/icons/exercise-supplies.png">'
      } else if (category === 'Children') {
        return '<img src="../images/landing_page/icons/children-equipment.png">'
      } else if (category === 'Hardware') {
        return '<img src="../images/landing_page/icons/tools-icon.png">'
      } else if (category === 'Medical') {
        return '<img src="../images/landing_page/icons/medical-equipment.png">'
      } else if (category === 'Outdoor') {
        return '<img src="../images/landing_page/icons/camping-icon.png">'
      } else if (category === 'Discover passes') {
        return '<img src="../images/landing_page/icons/event-game-passes.png">'
      } else if (category === 'Games') {
        return '<img src="../images/landing_page/icons/event-game-passes.png">'
      }
    }
};