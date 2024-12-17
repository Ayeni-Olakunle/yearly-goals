export function isLoggedIn() {
    if (typeof window !== "undefined") {
        return localStorage.getItem('token') !== null
    }
   return false
}

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  export function formatDate(dateTimeString: string): string {
      if (!dateTimeString) {
        return "N/A";
      }
      
      const date = new Date(dateTimeString);
      
      const day = String(date.getDate()).padStart(2, "0");
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const formattedDate = `${day} ${month} ${year}`;
    
      return formattedDate;
    }