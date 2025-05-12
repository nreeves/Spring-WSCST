# React Restaurant Application

## Prerequisites
- Node.js 14.x or higher
- npm 6.x or higher (or yarn 1.22+)

## Installation Steps

1. Clone the repository
   ```
   git clone <repository-url>
   cd assignment7
   ```

2. Install dependencies
   ```
   npm install
   ```
   
   If you get dependency conflicts, try:
   ```
   npm install --force
   ```

3. Start the development server
   ```
   npm start
   ```

## Troubleshooting Common Issues

### "Module not found" errors
Make sure all dependencies are installed:
```
npm install --force
```

### Error with reactstrap or Bootstrap
This project uses reactstrap 9.x with Bootstrap 4. If you encounter styling issues:
```
npm install bootstrap@4.0.0 --save
```

### Images not loading
Make sure the `/public/assets/images/` directory contains all required images.

### API or data loading errors
This project was originally designed to work with the JSON server from Assignment 8.
To run with mock data, you may need to:

1. Copy the `db.json` and `server.js` from Assignment 8
2. Install json-server: `npm install json-server`
3. Run the server in a separate terminal: 
   ```
   node server.js
   ```

## Project Structure
- `/src/components`: React components
- `/src/redux`: Redux store, actions, and reducers
- `/public/assets/images`: Images used by the application
