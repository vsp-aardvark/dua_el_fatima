
function ReadFile()
{
var FileOpener = new ActiveXObject(“Scripting.FileSystemObject”);
var FilePointer = FileOpener.OpenTextFile("MirHassan/txt/Nadeem Sarwar/1984-90/Ay Fatima Sughra Ghar Lut Gaya Beta", 1, true);
FileContents = FilePointer.ReadAll(); // we can use FilePointer.ReadAll() to read all the lines
alert(FileContents);
FilePointer.Close();
}


function WriteFile
{
var FileOpener = new ActiveXObject(“Scripting.FileSystemObject”);
var FilePointer = FileOpener.OpenTextFile(“C:Zeeshan.txt”, 8, true);
FilePointer.WriteLine(“I m a good boy”);
FilePointer.Close();
}
