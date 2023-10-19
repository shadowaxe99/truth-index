import statistics

# Function to define Key Performance Indicators (KPIs)

def define_kpis(data):
    # In this example, we calculate some basic statistics as our KPIs
    mean = statistics.mean(data)
    median = statistics.median(data)
    stdev = statistics.stdev(data)
    return {'mean': mean, 'median': median, 'stdev': stdev}

# Example usage

data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  # Some example data
kpis = define_kpis(data)
for kpi, value in kpis.items():
    print(f'{kpi}: {value}')