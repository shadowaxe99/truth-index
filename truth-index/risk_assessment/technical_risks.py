import random

# Function to assess technical risks

def assess_technical_risks(technical_aspects):
    # In this example, we randomly assign a risk level to each technical aspect
    risk_levels = ['Low', 'Medium', 'High']
    risks = {aspect: random.choice(risk_levels) for aspect in technical_aspects}
    return risks

# Example usage

technical_aspects = ['Architecture', 'Code quality', 'Infrastructure', 'Security']
risks = assess_technical_risks(technical_aspects)
for aspect, risk in risks.items():
    print(f'{aspect}: {risk}')