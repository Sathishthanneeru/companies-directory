export const fetchCompanies = async () => {
  try {
    const response = await fetch('/src/data/companies.json');
    if (!response.ok) throw new Error("Failed to load data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
