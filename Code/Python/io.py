from googleapiclient.discovery import build
from google.oauth2 import service_account
import base64

SERVICE_ACCOUNT_FILE = 'service.json'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

creds = None
creds = service_account.Credentials.from_service_account_file(
SERVICE_ACCOUNT_FILE, scopes=SCOPES)

# The ID spreadsheet.
SAMPLE_SPREADSHEET_ID = '1lHKLgpi5QhrkV10XyxqXH2gZ8ovbnFfCFLOktwpQC1s'

service = build('sheets', 'v4', credentials=creds)

# Obtain the encoded token from console input
encoded_token = input("Enter the encoded token: ")

# Split the encoded token into header, payload, and signature
header_enc, payload_enc, signature_enc = encoded_token.split('.')

# Decode the payload
payload = base64.urlsafe_b64decode(payload_enc + '==').decode('utf-8')

# Assign the decoded payload to the 'user' variable
user = [[payload]]

# Print the value of the 'user' variable
print("Decoded Payload:")
print(user)


# Call the Sheets API
sheet = service.spreadsheets()
result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                            range="Users!A1:G16").execute()
values = result.get('values', [])
#user = [["Youser","Loser","Bruiser",30],["Sc","Addr","Naho",40]]
sales = [["Sale44","Address","Name",30],["Sale2","Address2","Name2",40]]

#request = sheet.values().update(spreadsheetId=SAMPLE_SPREADSHEET_ID, range="Sales!B1", valueInputOption="USER_ENTERED", body={"values":sales}).execute()
request = sheet.values().update(spreadsheetId=SAMPLE_SPREADSHEET_ID, range="Users!A5", valueInputOption="USER_ENTERED", body={"values":user}).execute()

print(values)
print(request)








