from googleapiclient.discovery import build
from google.oauth2 import service_account

SERVICE_ACCOUNT_FILE = 'Key.json'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

creds = None
creds = service_account.Credentials.from_service_account_file(
SERVICE_ACCOUNT_FILE, scopes=SCOPES)

# The ID spreadsheet.
SAMPLE_SPREADSHEET_ID = '1lHKLgpi5QhrkV10XyxqXH2gZ8ovbnFfCFLOktwpQC1s'

service = build('sheets', 'v4', credentials=creds)

# Call the Sheets API
sheet = service.spreadsheets()
result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                            range="Users!A1:G16").execute()
values = result.get('values', [])

sales = [["Bot","Address","Name",30],["Sale2","Address2","Name2",40]]

request = sheet.values().update(spreadsheetId=SAMPLE_SPREADSHEET_ID, range="Sales!B1", valueInputOption="USER_ENTERED", body={"values":sales}).execute()

print(values)
print(request)
