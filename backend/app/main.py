from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from . import models, schemas, crud, database

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/")
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db, user)

@app.post("/mood/")
def log_mood(mood: schemas.MoodLogCreate, db: Session = Depends(get_db)):
    return crud.create_mood_log(db, mood)

@app.post("/journal/")
def log_journal(journal: schemas.JournalCreate, db: Session = Depends(get_db)):
    return crud.create_journal(db, journal)

@app.get("/")
def root():
    return {"message": "Mental Health Chatbot Backend is running"}
