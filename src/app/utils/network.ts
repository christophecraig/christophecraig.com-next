export const fetcher = async (url: string) => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error: any) {
      // You can handle errors here, e.g., log them or show a toast notification
      console.error('Error fetching data:', error.message);
      throw error;
    }
  };
  