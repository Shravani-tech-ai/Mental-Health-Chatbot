'use client';
import { useState } from 'react';

export default function Home() {
  const [tab, setTab] = useState('login'); // 'login' or 'signup'
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  // Function to auto-calculate age
  const calculateAge = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    return calculatedAge;
  };

  const handleDobChange = (e) => {
    const selectedDate = e.target.value;
    setDob(selectedDate);
    setAge(calculateAge(selectedDate));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to MindMate</h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Your mental health companion — Chat, track your moods, and keep a journal to support your wellbeing.
      </p>

      {/* Login / Signup Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        {/* Tab Switcher */}
        <div className="flex mb-4">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-2 rounded-t-lg font-semibold ${
              tab === 'login' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setTab('signup')}
            className={`flex-1 py-2 rounded-t-lg font-semibold ${
              tab === 'signup' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Forms */}
        {tab === 'login' ? (
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg px-4 py-2 w-full"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-lg px-4 py-2 w-full"
            />

            {/* Date of Birth */}
            <label className="text-left text-gray-700 text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={handleDobChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
            {age && (
              <p className="text-sm text-gray-600">Age: <span className="font-semibold">{age}</span></p>
            )}

            {/* Gender */}
            <label className="text-left text-gray-700 text-sm font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border rounded-lg px-4 py-2 w-full"
            >
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>

            <button
              type="submit"
              className="bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>

      {/* Footer navigation */}
      <div className="mt-8 flex gap-4">
        <a href="/chat" className="text-indigo-500 hover:underline">Go to Chat</a>
        <a href="/mood" className="text-indigo-500 hover:underline">Mood Tracker</a>
        <a href="/journal" className="text-indigo-500 hover:underline">Journal</a>
      </div>
    </div>
  );
}
