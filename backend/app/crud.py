from sqlalchemy.orm import Session
from . import models, schemas

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(username=user.username, email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def create_mood_log(db: Session, mood_log: schemas.MoodLogCreate):
    log = models.MoodLog(**mood_log.dict())
    db.add(log)
    db.commit()
    db.refresh(log)
    return log

def create_journal(db: Session, journal: schemas.JournalCreate):
    entry = models.Journal(**journal.dict())
    db.add(entry)
    db.commit()
    db.refresh(entry)
    return entry
