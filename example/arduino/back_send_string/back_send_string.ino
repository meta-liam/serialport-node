/*
Arduino Uno 
*/

String incomingByte = "";

void setup()
{
    Serial.begin(115200);
    Serial.println("back send"); 
}

void loop()
{
  while (Serial.available() > 0) {
    incomingByte += char(Serial.read());
    delay(2);
  }

  if ( incomingByte.length() > 0 ) { 
     //Serial.println(incomingByte);
     Serial.write(incomingByte,DEC);
     incomingByte = "";
  }

}
