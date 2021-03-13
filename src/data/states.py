"""
Hack the break hackathon.
"""
import json
import re



if __name__ == "__main__":
    states = [
        "AK",
        "AL",
        "AR",
        "AZ",
        "CA",
        "CO",
        "CT",
        "DC",
        "DE",
        "FL",
        "GA",
        "HI",
        "IA",
        "ID",
        "IL",
        "IN",
        "KS",
        "KY",
        "LA",
        "MA",
        "MD",
        "ME",
        "MI",
        "MN",
        "MO",
        "MS",
        "MT",
        "NC",
        "ND",
        "NE",
        "NH",
        "NJ",
        "NM",
        "NV",
        "NY",
        "OH",
        "OK",
        "OR",
        "PA",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VA",
        "VT",
        "WA",
        "WI",
        "WV",
        "WY"
    ]

    languages = {"java", "javascript", "golang", "python", "c++", "c", "c#",
                 "typescript", "php", "kotlin", "rust", "scala", "ocaml",
                 "haskell", "elixir", "f#", "swift", "objective-c", "ruby"}

    front_end = {"react", "angular", "vue", "jquery", "reasonml", "elm"}

    back_end = {"express", "django", "laravel", "flask", "phoenix"}

    databases = {"mysql", "postgresql", "mongodb"}

    frequencies = {state: {"languages": {language: 0 for language in languages},
                   "front end": {framework: 0 for framework in front_end},
                   "back end": {framework: 0 for framework in back_end},
                   "databases": {database: 0 for database in databases}}
                   for state in states}

    with open("./data.json") as f:
        jobs = json.load(f)

    for job in jobs:
        job_description = job["job_description"]
        state = job["state"][:2]

        if state not in states:
            continue

        words = re.sub("[^\w(++|#|\-c?)]", " ", job_description).split()

        for word in words:
            technology = word.lower()

            if technology in frequencies[state]["languages"]:
                frequencies[state]["languages"][technology] += 1

            if technology in frequencies[state]["front end"]:
                frequencies[state]["front end"][technology] += 1

            if technology in frequencies[state]["back end"]:
                frequencies[state]["back end"][technology] += 1

            if technology in frequencies[state]["databases"]:
                frequencies[state]["databases"][technology] += 1

    print(json.dumps(frequencies, indent=2, sort_keys=True))
    f.close()

