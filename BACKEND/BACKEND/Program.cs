using BACKEND.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddSingleton<ITeamGeneratorRepository, TeamGeneratorRepository>();

var app = builder.Build();



app.UseRouting();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

//Ez csak azért kell, hogy tudjam, hogy fut a backend. Hajlamos vagyok megfeledkezni róla
app.MapGet("/", () => "Hello World!");



//CORS
app.UseCors(x => x
    .AllowCredentials()
    .AllowAnyMethod()
    .AllowAnyHeader()
    .WithOrigins("http://127.0.0.1:5500"));

app.Run();
