import requests
from bs4 import BeautifulSoup

# Function to scrape data from a given URL

def scrape_data(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        # Extract all paragraph texts
        paragraphs = [p.text for p in soup.find_all('p')]
        return paragraphs
    else:
        print("Error: Failed to scrape data from the URL")
        return None

# Example usage

paragraphs = scrape_data("https://example.com")
if paragraphs is not None:
    for p in paragraphs:
        print(p)