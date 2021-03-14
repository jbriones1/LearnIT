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

    technologies = front_end | back_end | databases

    frequencies = {
        state: {
            "languages": {language: 0 for language in languages},
            "technologies": {technology: 0 for technology in technologies}
        }
        for state in states
    }

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

            if technology in frequencies[state]["technologies"]:
                frequencies[state]["technologies"][technology] += 1


    result = {
        state: {
            "languages": [
                {"name": language, "value": value}
                for language, value in frequencies[state]["languages"].items()
            ],
            "technologies": [
                {"name": technology, "value": value}
                for technology, value in frequencies[state]["technologies"].items()
            ]
        }
        for state in frequencies
    }

    print(json.dumps(result, indent=2, sort_keys=True))
    f.close()

