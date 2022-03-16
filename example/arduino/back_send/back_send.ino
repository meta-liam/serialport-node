/*
Arduino Uno 
*/

int incomedate = 0;

void setup()
{
    Serial.begin(115200);
    Serial.println("back send"); 
}

void loop()
{

    if (Serial.available() > 0 ){
        incomedate = Serial.read();
         Serial.println(incomedate,HEX);
    }

    delay(100); 
}
