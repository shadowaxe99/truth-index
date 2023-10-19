import hashlib

# Function to verify data

def verify_data(data, expected_hash):
    # Calculate the SHA256 hash of the data
    data_hash = hashlib.sha256(data.encode()).hexdigest()
    # Compare the calculated hash with the expected hash
    return data_hash == expected_hash

# Example usage

data = 'Hello, world!'
expected_hash = hashlib.sha256(data.encode()).hexdigest()
print(verify_data(data, expected_hash))