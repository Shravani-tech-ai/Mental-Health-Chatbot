from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class UserCreate(BaseModel):
    username: str
    email: str

class MoodLogCreate(BaseModel):
    mood: str
    user_id: int

class JournalCreate(BaseModel):
    content: str
    user_id: int

class MoodLogOut(MoodLogCreate):
    timestamp: datetime

class JournalOut(JournalCreate):
    timestamp: datetime
