import os

# Function to assess legal compliance risks

def assess_legal_compliance(project_files):
    # In this example, we simply check if all required files exist
    required_files = ['LICENSE', 'README.md', 'CONTRIBUTING.md']
    missing_files = [file for file in required_files if file not in project_files]
    if missing_files:
        print('Legal compliance risk: The following required files are missing:', ', '.join(missing_files))
    else:
        print('No legal compliance risks detected.')

# Example usage

project_files = os.listdir('.')
assess_legal_compliance(project_files)