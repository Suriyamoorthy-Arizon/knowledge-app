# Knowledge Desk

An AI-powered multi-tenant enterprise knowledge-sharing and collaboration platform built to centralize organizational knowledge, improve employee learning, and enable seamless collaboration.

## Overview

Knowledge Desk helps organizations create, manage, discover, and share knowledge through articles, discussions, real-time communication, and AI-assisted learning.

The platform combines:

* Knowledge Base Management
* AI-Powered Assistant
* Community Discussions
* Real-Time Team Chat
* Analytics & Insights
* Employee Collaboration
* Multi-Tenant Organization Management

## Features

### Authentication & Authorization

* JWT Authentication
* Role-Based Access Control (RBAC)
* Company Registration
* Employee Registration
* Email Verification
* Password Reset
* Secure Sessions

### Knowledge Base

* Create Articles
* Rich Text Editor
* Categories & Tags
* Article Search
* Comments & Replies
* Reactions & Bookmarks
* Reading History

### Community

* Discussion Threads
* Questions & Answers
* Best Answer Selection
* Mentions & Notifications

### Real-Time Chat

* Team Channels
* Threaded Conversations
* Emoji Reactions
* Online Presence
* Typing Indicators
* File Sharing

### AI Assistant

* Context-Aware AI Chat
* Knowledge Base Search
* Documentation Summaries
* Suggested Articles
* Personalized AI History

### Analytics

* Employee Engagement
* Article Performance
* Search Trends
* AI Usage Metrics
* Community Activity Insights

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Zustand / Redux
* TanStack Query
* Axios

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Prisma ORM

### Realtime

* Socket.IO

### Authentication

* Auth.js

### AI

* Google Gemini API

### Storage

* AWS S3 / Cloudinary

## Project Structure

```text
knowledge-desk/
│
├── apps/
│   ├── web/
│   └── server/
│
├── packages/
│   ├── ui/
│   ├── config/
│   └── types/
│
├── prisma/
├── docs/
├── socket/
├── uploads/
```

## Getting Started

### Clone Repository

```bash
git clone https://github.com/kavi-22/knowledge-desk.git
```

### Install Dependencies

```bash
npm install
```

### Configure Environment

Create a `.env` file:

```env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
GEMINI_API_KEY=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_BUCKET_NAME=
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Roadmap

### Phase 1

* Authentication
* Company Management
* User Roles
* Dashboard

### Phase 2

* Knowledge Base
* Categories
* Search
* Comments

### Phase 3

* Community Discussions
* Realtime Chat
* Notifications

### Phase 4

* AI Integration
* Smart Search
* AI Recommendations

### Phase 5

* Analytics
* Favorites
* AI Knowledge Training

## Future Enhancements

* AI Knowledge Training
* Internal Wiki
* Voice Collaboration
* Video Meetings
* Gamification
* Mobile Application
* SSO Integration
* AI Auto Tagging
* AI Duplicate Detection

## Security

* XSS Protection
* CSRF Protection
* SQL Injection Protection
* Rate Limiting
* Secure Headers
* Multi-Tenant Data Isolation

## License

MIT License

## Author

Developed by Kavi as part of the Knowledge Desk enterprise knowledge management platform.
