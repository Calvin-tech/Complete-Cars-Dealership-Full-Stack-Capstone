import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
django.setup()

from djangoapp.models import CarMake, CarModel

def run():
    # Clear existing data
    CarModel.objects.all().delete()
    CarMake.objects.all().delete()

    # Create Car Makes
    toyota = CarMake.objects.create(name="Toyota", description="Japanese car manufacturer", country="Japan")
    honda = CarMake.objects.create(name="Honda", description="Japanese car manufacturer", country="Japan")
    ford = CarMake.objects.create(name="Ford", description="American car manufacturer", country="USA")

    # Create Car Models
    CarModel.objects.create(name="Camry", car_make=toyota, type="Sedan", year=2024, dealer_id=1)
    CarModel.objects.create(name="Corolla", car_make=toyota, type="Sedan", year=2024, dealer_id=1)
    CarModel.objects.create(name="Civic", car_make=honda, type="Sedan", year=2024, dealer_id=1)
    CarModel.objects.create(name="F-150", car_make=ford, type="Truck", year=2024, dealer_id=2)

    print("Database seeded successfully!")

if __name__ == "__main__":
    run()
