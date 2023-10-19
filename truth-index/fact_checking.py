import json
from urllib.request import urlopen

class FactChecker:

    def __init__(self):
        self.sources = []

    def load_sources(self, source_file):
        with open(source_file) as f:
            self.sources = json.load(f)

    def check_claim(self, claim):
        evidence = {}
        for source in self.sources:
            url = source["url"]
            try:
                page = urlopen(url)
                if claim.lower() in page.read().decode('utf-8').lower():
                    evidence[source["name"]] = "SUPPORTS"
                else:
                    evidence[source["name"]] = "REFUTES"
            except Exception as e:
                print(f'Error accessing {url}: {str(e)}')
        if len(evidence.values()) > 0:
            verdict = max(set(evidence.values()), key=list(evidence.values()).count)
            return verdict
        else:
            return "NO EVIDENCE"


# Example usage

checker = FactChecker()
checker.load_sources("sources.json")
verdict = checker.check_claim("The moon landing was faked")
print(verdict)