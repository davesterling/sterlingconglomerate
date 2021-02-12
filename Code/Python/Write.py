import sys

id_token = sys.argv[1]  # Get the ID Token from command line argument

# Write the ID Token to the "users" value
with open('users', 'w') as f:
    f.write(id_token)

print('ID Token saved to "users" file.')

from googleapiclient.discovery import build
from google.oauth2 import service_account

SERVICE_ACCOUNT_FILE = 'Key.json'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

creds = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
SAMPLE_SPREADSHEET_ID = '1lHKLgpi5QhrkV10XyxqXH2gZ8ovbnFfCFLOktwpQC1s'

service = build('sheets', 'v4', credentials=creds)
sheet = service.spreadsheets()

# Assuming the 'Users' sheet has columns 'A' to 'G' for each user data
users = [["test1", "vov2", "Dbob3"], ["yest2", "Data2", "Data3"]]

# Assuming the 'Sales' sheet has columns 'A' to 'D' for each sale data
sales = [["Sale", "Address", "Name", 30], ["Sale2", "Address2", "Name2", 40]]

# Write user data to the 'Users' sheet
request = sheet.values().update(
    spreadsheetId=SAMPLE_SPREADSHEET_ID,
    range="Users!A1:C" + str(len(users)),  # Assuming 3 columns for user data
    valueInputOption="USER_ENTERED",
    body={"values": users}
).execute()

# Write sale data to the 'Sales' sheet
request = sheet.values().update(
    spreadsheetId=SAMPLE_SPREADSHEET_ID,
    range="Sales!A1:D" + str(len(sales)),  # Assuming 4 columns for sale data
    valueInputOption="USER_ENTERED",
    body={"values": sales}
).execute()

print("User data written to 'Users' sheet.")
print("Sale data written to 'Sales' sheet.")
