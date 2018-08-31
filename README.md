# Game Dev Network's Job Listing Repository

* [How do I search for a vacancy/worker?](README.md#how-do-i-search-for-a-vacancyworker)
* [Conversion from Game Dev Network](README.md#conversion-from-game-dev-network)
* [Adding a posting](README.md#adding-a-posting)
  * [\[VP\] Paid or unpaid?](README.md#vp-paid-or-unpaid)
  * [Which directory to use](README.md#which-directory-to-use)
  * [Deciding the primary category](README.md#deciding-the-primary-category)
  * [Collecting other information you need](README.md#collecting-other-information-you-need)
  * [Create your business profile](README.md#create-your-business-profile)
  * [Create renewal registry entries](README.md#create-renewal-registry-entries)
  * [Create your posting file](README.md#create-your-posting-file)
  * [Adding your posting to the index](README.md#adding-your-posting-to-the-index)
* [Updating or renewing a posting](README.md#updating-or-renewing-a-posting)
* [Removing a posting before expiry or a business profile](README.md#removing-a-posting-before-expiry-or-a-business-profile)

## How do I search for a vacancy/worker?

If you're looking for:
* a Paid Vacancy Posting then search `./looking-for-members-paid/`,
* an Unpaid Vacancy Posting (including revenue shares) vacancy then search `./looking-for-memebrs`,
* a Looking For Work Posting then search `./looking-for-work`

## Conversion from Game Dev Network

We use slightly different terms to the old Discord channels

* Posts in `#lfm-paid-only` are now Paid Vacancy Postings (or PVPs)
* Posts in `#looking-for-members` are now Unpaid Vacancy Postings (or UVPs)
* Posts in `#looking-for-work` are now Looking For Work Postings (or LFWPs)

## Adding a posting

If the heading only applies for—
* Vacancy Postings, we'll prefix it with `[VP]`, or
* Looking For Work Postings, we'll prefix it with `[LFWP]`.

Otherwise, the heading applies to all postings

### [VP] Paid or unpaid?

You need to determine whether your vacancy can be counted as "paid" or not. As a summary, we don't count revenue share schemes as paid. We have extensive guidance on whether you can count your posting as paid or not [over here](PAID_OR_UNPAID.md), but it's quite long so please just use your common sense.

### Which directory to use

Although probably meaningless until you get further in this document, register changes should be made in `./registers/`.

If you have an Unpaid Vacancy Posting, you'll want to make all other changes in the `./looking-for-members/` directory. If your posting is a Paid Vacancy Posting then you should make those changes in `./looking-for-members-paid/`. Looking For Working Postings go in `./looking-for-work`.

All the primary categories in these directories are the same, so the advice below for those still applies.

### Deciding the primary category

You'll need a few different pieces of information to submit your posting. Firstly you'll need to decide which primary category your posting falls into. We have separate indices for each category, roughly matching the Game Dev Network roles. At present, the posting should fall into one of the following primary categories:

* 3D Modeller
* Artist
* Community Manager
* Content Creator
* Designer
* Legal Services Provider
* Localiser
* Marketing
* Programmer
* Publisher
* QA Tester
* Sound
* Video Producer
* Voice Actor
* Writer

As you can see, there's quite a lot to choose from. If what you're posting isn't covered, you can also use the "Other" primary category.

### Collecting other information you need

Along with the primary category, for a Vacancy Posting you'll want:

* your project name
* a brief description of the type of role required (this a bit like a secondary category, e.g. concept artist)
* your current team size
* the expected project length
* compensation, if any
* if the project is unpaid, your role and any previous projects
* a full description of the role (including responsibilities)
* a description of the project

For a Looking For Work Posting, you have much more freedom over what you include. However, you should decide on the following to make searching a little easier:

* a brief description of what you do (this a bit like a secondary category, e.g. concept artist)
* whether or not you accept revenue shares and other unpaid work

You can embed external images in your postings too, so make sure to upload them somewhere else if you want to use them.

### Create your business profile

Not sure if you've already got one? That's okay! Have a search of the [business register](registers/business.tsv). If you've already got one, great! Make a note of your business's UUID because you'll need it in a bit.

If you've not got one, then you'll only need to create a new one once:

1. Generate a new version 4 UUID [here](https://www.uuidgenerator.net/version4)
2. Edit the [business register](registers/business.tsv), and add a new line
3. Use the UUID you just generated as your `Business UUID`
4. Fill in the following information with the tab key to go to the next column:
  * your business name (if you've not got one, use the full list of owners/partners separated by a comma)
  * your official country of registration if you've got one, otherwise your main country of operation
  * your contact email address and discord username, where we'll send renewal reminders

We get that information so that we can identify different businesses with a same or similar name. We then use the UUID to make sure each business then gets their own unique space.

### Create renewal registry entries

We use a renewal registry to make sure that postings are kept up to date. This reduces time when searching as it should reduce the number of outdated posts.

1. Calculate your renewal date over [here](https://Game-Dev-Network.github.io/work/). Make sure to select the right type of posting otherwise your pull request might be rejected
2. Generate a new version 4 UUID [here](https://www.uuidgenerator.net/version4)
3. Edit the [renewals register](registers/renewals.tsv), and add a new line
4. Use the UUID you just generated as your `Posting UUID`
5. Fill in the following information with the tab key to go to the next column:
  * your `Business UUID`
  * your posting's renewal date
  * your posting type:
    * "UVP" for Unpaid Vacancy Postings
    * "PVP" for Paid Vacancy Postings
    * "LFWP" for Looking For Work Postings

### Create your posting file

Nearly there now! We're going to make a more details file to let people know more about your posting. Unless otherwise mentioned, from now on we're assuming that you're working fully inside your posting type's directory (i.e. `./looking-for-work/`, `./looking-for-members`, or `looking-for-members-paid`).

1. If a directory matching your `Business UUID` does not exist under the `profiles` directory, create one
2. Navigate to your `Business UUID` subdirectory under the `profiles` directory.
3. Create a new directory with the same name as your `Posting UUID` and navigate into it.
3. Create a `README.md` file, and fill it out with information about your posting.

Please note that Vacancy Postings have additional required information.

Vacancy Postings require the following in their `README.md`:

* A full description of the role
* A description of the project

In addition, Unpaid Vacancy Postings require the following in their `README.md`:

* Your role
* Any previous projects

### Adding your posting to the index

This is the last thing we need to do.

You need to make these changes in the `.tsv` primary category index within your posting type's directory. For example, if you're a programmer that's looking for work, you'll make the following changes in the `./looking-for-work/programmer.tsv` file.

1. Add a new line to your primary category's index file
2. Fill in the following information with the tab key to go to the next column:
  * for a Vacancy Posting:
    * your project name
    * a brief description of the type of role required (this a bit like a secondary category, e.g. concept artist)
    * your current team size
    * the expected project length
    * compensation, if any
    * the link to your additional information (the format is `https://github.com/Game-Dev-Network/work/tree/master/{posting type}/profiles/{Business UUID}/{Posting UUID}/README.md`)
    * your `Business UUID`
  * for a Looking For Work Posting:
    * a brief description of what roles you do (this a bit like a secondary category, e.g. concept artist)
    * whether you accept revenue shares (we expect a significant number of people to answer **no** to this one) - yes/no
    * whether you do work for free (we expect most people to answer **no** to this one) - yes/no
    * the link to your additional information (the format is `https://github.com/Game-Dev-Network/work/tree/master/looking-for-work/profiles/{Business UUID}/{Posting UUID}/README.md`)
    * your `Business UUID`

## Updating or renewing a posting

You can update a posting at any time. Simply edit the necessary files as long as they continue follow the requirements in place for creating a posting at the time of the edit. You should not update the renewal date when editing your posting.

You can renew your posting by recalculating the renewal date up to 6 days before your renewal date (Monday to Sunday inclusive). Although we may send out a reminder to renew, we may also choose to remove any postings that have expired regardless of if we did send out a reminder.

## Removing a posting before expiry or a business profile

Just remove it from your business's unique space, the primary category index, and the renewals register. You might want to keep your business profile around to use it in the future.

If you want to remove your business profile, you'll need to remove all of your postings, or transfer them to a new business profile.
