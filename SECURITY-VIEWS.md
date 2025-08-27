# Views Tracking System - Security Documentation

## 🔒 Security Features Implemented

### ✅ Server-Side Protections
1. **API Token Protection**: Sanity write token stays server-side only
2. **Input Validation**: Validates postId format and type
3. **Rate Limiting**: Server-side IP-based rate limiting (10 requests per 30 min per IP)
4. **Request Timeouts**: Prevents hanging requests (5s for Sanity calls, 10s for client requests)
5. **Error Sanitization**: Doesn't expose internal errors or postId in responses
6. **HTTP Method Restrictions**: Only allows POST requests
7. **View Count Limits**: Prevents unreasonably high view counts (max 1M)
8. **Sanity Validation**: Verifies post exists before updating

### ✅ Client-Side Protections
1. **Rate Limiting**: 30-minute window between views per post per browser
2. **Input Validation**: Validates postId before making requests
3. **Graceful Error Handling**: Handles network errors, timeouts, and rate limiting
4. **Request Timeouts**: 10-second timeout for API calls
5. **Retry Logic**: Doesn't mark as viewed on error, allowing retries

### ✅ Middleware Security
1. **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
2. **CORS Configuration**: Configurable origin restrictions
3. **Method Validation**: Blocks non-POST requests to increment endpoint

## 🛡️ Additional Recommendations

### For Production Deployment:

1. **Environment Variables**:
   ```env
   SANITY_API_WRITE_TOKEN=your_token_here
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

2. **CORS Configuration**:
   ```typescript
   // In middleware.ts, change:
   response.headers.set('Access-Control-Allow-Origin', '*')
   // To:
   response.headers.set('Access-Control-Allow-Origin', 'https://yourdomain.com')
   ```

3. **Rate Limiting Upgrade**:
   - Consider using Redis or database for distributed rate limiting
   - Current in-memory solution resets on server restart

4. **Monitoring**:
   - Set up logging for suspicious activity
   - Monitor for unusual view count patterns
   - Track rate limit violations

5. **Database Security**:
   - Use Sanity's built-in role-based access control
   - Create dedicated API tokens with minimal permissions
   - Regularly rotate API tokens

## 🚨 Known Limitations

1. **In-Memory Rate Limiting**: Resets on server restart
2. **Client-Side Bypass**: Sophisticated users can bypass client-side rate limiting
3. **IP-Based Limiting**: Shared IPs (offices, cafes) may hit limits faster
4. **No Authentication**: Anonymous view tracking (by design)

## 📊 Usage Analytics

The system tracks:
- ✅ Unique views per post (with rate limiting)
- ✅ Total view counts
- ✅ Most viewed posts ranking
- ❌ User identification (anonymous by design)
- ❌ Geographic data
- ❌ Detailed analytics

## 🔧 Configuration

### Rate Limiting Settings:
```typescript
// Server-side (API route)
const RATE_LIMIT_WINDOW = 30 * 60 * 1000 // 30 minutes
const MAX_REQUESTS_PER_IP = 10 // Per window

// Client-side (localStorage)
const VIEW_COOLDOWN = 30 * 60 * 1000 // 30 minutes
```

### Security Headers:
```typescript
// middleware.ts
'X-Frame-Options': 'DENY'
'X-Content-Type-Options': 'nosniff'
'Referrer-Policy': 'strict-origin-when-cross-origin'
'X-XSS-Protection': '1; mode=block'
```

## 🧪 Testing Security

Test the security features:

1. **Rate Limiting**: Try making >10 requests in 30 minutes
2. **Invalid Input**: Send malformed postId values
3. **Method Testing**: Try GET/PUT/DELETE on the endpoint
4. **Timeout Testing**: Monitor with slow network connections

## 📈 Performance Impact

- **Client-Side**: Minimal impact, single API call per post view
- **Server-Side**: Lightweight caching, efficient Sanity queries
- **Storage**: localStorage for client state, minimal Sanity writes
- **Network**: Single POST request per legitimate view

## 🔄 Future Enhancements

Consider implementing:
1. **Redis-based rate limiting** for production scale
2. **User authentication** for personalized analytics
3. **Bot detection** using request patterns
4. **Geographic restrictions** if needed
5. **Real-time analytics dashboard**
