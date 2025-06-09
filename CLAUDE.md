# Rails Template Project - Development Guide

## Project Overview
Modern Rails 8 template with Korean localization and Solid Stack components.

## Stack
- **Rails**: 8.0.2
- **Ruby**: 3.4.1
- **Database**: PostgreSQL
- **Frontend**: Hotwire (Turbo + Stimulus) + Tailwind CSS
- **Assets**: Propshaft + Import Maps
- **Background Jobs**: Solid Queue (database-backed)
- **Caching**: Solid Cache (database-backed) 
- **WebSockets**: Solid Cable (database-backed)
- **Deployment**: Kamal + Docker

## Development Commands

### Server
```bash
bin/dev                    # Start development server with Tailwind CSS watcher
bin/rails server           # Rails server only
```

### Database
```bash
bin/rails db:create        # Create databases
bin/rails db:migrate       # Run migrations
bin/rails db:seed          # Seed database
bin/rails db:reset         # Drop, create, migrate, seed
```

### Testing
```bash
bin/rails test            # Run all tests
bin/rails test:system     # Run system tests
```

### Code Quality
```bash
bundle exec rubocop       # Run RuboCop linter
bundle exec brakeman      # Security vulnerability scan
```

### Assets
```bash
bin/rails assets:precompile  # Precompile assets for production
```

### Credentials
```bash
EDITOR=vi rails credentials:edit  # Edit encrypted credentials
```

### Deployment
```bash
kamal deploy              # Deploy with Kamal
```

## File Structure

### Controllers
- `app/controllers/application_controller.rb` - Base controller
- `app/controllers/concerns/` - Controller concerns

### Models  
- `app/models/application_record.rb` - Base model
- `app/models/concerns/` - Model concerns

### Views
- `app/views/layouts/application.html.erb` - Main layout
- `app/views/layouts/shared/` - Shared partials

### JavaScript
- `app/javascript/application.js` - Main JS entry point
- `app/javascript/controllers/` - Stimulus controllers

### Stylesheets
- `app/assets/stylesheets/application.css` - Main CSS
- `app/assets/tailwind/application.css` - Tailwind CSS

## Configuration

### Localization
- Default locale: Korean (`ko`)
- Timezone: Asia/Seoul
- Locale files: `config/locales/ko.yml`

### Database
- Development: PostgreSQL
- Production: PostgreSQL
- Configuration: `config/database.yml`

### Environment
- Development: `config/environments/development.rb`
- Production: `config/environments/production.rb`
- Test: `config/environments/test.rb`

## Key Features
- No Redis dependency (using Solid Stack)
- Korean language support
- Modern Rails 8 features
- Container-ready deployment
- Security-focused (Brakeman, CSP)

## Common Tasks

### Adding a new feature
1. Generate controller: `bin/rails g controller FeatureName`
2. Add routes in `config/routes.rb`
3. Create views in `app/views/feature_name/`
4. Add Stimulus controller if needed
5. Write tests

### Adding a model
1. Generate model: `bin/rails g model ModelName`
2. Edit migration file
3. Run migration: `bin/rails db:migrate`
4. Add validations and associations
5. Write tests

### Styling
- Use Tailwind CSS classes
- Custom CSS in `app/assets/stylesheets/`
- Check responsive design

### Background Jobs
- Use Solid Queue (no Redis needed)
- Jobs go in `app/jobs/`
- Enqueue with `YourJob.perform_later`