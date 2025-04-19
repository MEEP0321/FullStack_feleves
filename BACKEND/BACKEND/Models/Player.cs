namespace BACKEND.Models
{
    public class Player
    {
        public Player(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public string Name { get; set; }
        public int Age { get; set; }


    }
}
