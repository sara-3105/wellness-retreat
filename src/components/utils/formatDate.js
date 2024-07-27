// Utility function to format dates
export const formatDateRange = (startTimestamp, durationInDays) => {
    const startDate = new Date(startTimestamp * 1000);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + durationInDays);
  
    const formatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
  
    const startFormatted = startDate.toLocaleDateString('en-US', formatOptions);
    const endFormatted = endDate.toLocaleDateString('en-US', formatOptions);
  
    // If the start and end month/year are the same, don't repeat them in the end date
    if (startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
      return `${startFormatted.split(',')[0]} - ${endFormatted.split(',')[0]}, ${startDate.getFullYear()}`;
    } else {
      return `${startFormatted} - ${endFormatted}`;
    }
  };
  